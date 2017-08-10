import express from 'express'
import requests from './src/request.server'
import bodyParser from 'body-parser'

const app = new express();

app.use(bodyParser());

Object.entries(requests).forEach(([endpoint, validators])=>{
  console.log(`/requests${endpoint}`)
  app.post(`/requests${endpoint}`, (req, res) => {
    console.log(`/requests${endpoint}`)
    const errors = [];

    Object.entries(validators).map(([key, rule]) => {
      // バリデータに必須フラグをつけていないので今度やる
      // if(!(key in req)) {
      //   errors.push('${key}がありません。')
      // }

      if(rule == 'pass') return;
      if(!(key in req.body) || !req.body[key]) return; // 一旦省く
      const target = req.body[key];

      console.log(key, target, rule)
      console.log(target.match(rule))
      if(target.match(rule) === null) {
        errors.push(`${key}が不正です。マッチャ「${rule}」`);
      }
    });
    !errors.length ? (res.json({status:'success'})) : (res.status(400) && res.json({status:'fail',errors}));
  });
});


var server = app.listen(3000, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port)
});
