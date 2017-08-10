import express from 'express'
import requests from './src/request.server'
import bodyParser from 'body-parser'

const app = new express()

app.use(bodyParser())

Object.entries(requests).map(([endpoint, validators])=>{
  app.post(`/requests${endpoint}`, (req, res) => {
    console.log(`/requests${endpoint}`)
    const errors = [];
    Object.entries(validators).map(([key, rule]) => {
      // TODO バリデータに必須フラグをつける
      if(rule == 'pass') return
      if(!(key in req.body) || !req.body[key]) return
      const target = req.body[key]
      console.log(key, target, rule)
      console.log(target.match(rule))
      (target.match(rule)||[]).length and errors.push(`${key}が不正です。マッチャ「${rule}」`)
    });
    !errors.length ? (res.json({status:'success'})) : (res.status(400) && res.json({status:'fail',errors}));
  });
});


const server = app.listen(3000, '0.0.0.0', () => {
  const { address, port = } server.address();
  console.log('App listening at http://%s:%s', address, port)
});
