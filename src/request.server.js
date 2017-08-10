module.exports = {
  "/account/name/update": {
    "name": /(.+)/
  },
  "/account/url/update": {
    "name": ''
  },
  "/account/avatar/update": {
    "file-id": /([0-9a-zA-Z]){24}/,
    "trim-x": /[0-9]+/,
    "trim-y": /[0-9]+/,
    "trim-w": /[0-9]+/,
    "trim-h": /[0-9]+/
  },
  "/account/banner/update": {
    "file-id": /([0-9a-zA-Z]){24}/,
    "trim-x": /[0-9]+/,
    "trim-y": /[0-9]+/,
    "trim-w": /[0-9]+/,
    "trim-h": /[0-9]+/
  },
  "/account/comment/update": {
    "name": /(.+)/
  },
  "/account/location/update": {
    "name": /(.+)/
  },
  "/account/tags/update": {
    "name": /(.+)/
  },
  "/notifications/timeline": {
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/notifications/delete-all": {
    // ペイロードなし
  },
  "/notifications/unread/count": {
    // ペイロードなし
  },
  "/users/show": {
    "screen-name": /([0-9a-zA-Z]){24}/
  },
  "/users/follow": {
    "user-id": /([0-9a-zA-Z]){24}/
  },
  "/users/unfollow": {
    "user-id": /([0-9a-zA-Z]){24}/
  },
  "/users/following": {
    "user-id": /([0-9a-zA-Z]){24}/,
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/users/followers": {
    "user-id": /([0-9a-zA-Z]){24}/,
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/users/recommendations": {
    // ペイロードなし
  },
  "/users/search": {
    // ユーザーの名称・スクリーンネーム両方で探す
    "query": /(.+)/
  },
  "/users/search-by-screen-name": {
    // ユーザーのスクリーンネームだけから探す
    "screen-name": /([0-9a-zA-Z]){24}/
  },
  "/posts/timeline": {
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/posts/user-timeline": {
    "user-id": /([0-9a-zA-Z]){24}/,
    "types": /(.+)/,
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/posts/mentions/show": {
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/posts/mentions/delete-all": {
    // ペイロードなし
  },
  "/posts/mentions/unread/count": {
    // ペイロードなし
  },
  "/posts/show": {
    "post-id": /([0-9a-zA-Z]){24}/
  },
  "/posts/talk/show": {
    "post-id": /([0-9a-zA-Z]){24}/,
    "limit": /[0-9]+/
  },
  "/posts/replies/show": {
    "post-id": /([0-9a-zA-Z]){24}/,
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/posts/timeline/unread/count": {
    // ペイロードなし
  },
  "/posts/create": {
    "text": /(.+)/,
    "files": /([0-9a-zA-Z]+(,$|))*/
  },
  "/posts/reply": {
    "text": /(.+)/,
    "in-reply-to-post-id": /([0-9a-zA-Z]){24}/,
    "files": /([0-9a-zA-Z]+(,$|))*/
  },
  "/posts/repost": {
    "post-id": /([0-9a-zA-Z]){24}/
  },
  "/posts/like": {
    "post-id": /([0-9a-zA-Z]){24}/
  },
  "/posts/unlike": {
    "post-id": /([0-9a-zA-Z]){24}/
  },
  "/posts/search": {
    "query": /(.+)/,
    "limit": /[0-9]+/,
    "since-cursor": /[0-9]+/,
    "max-cursor": /[0-9]+/
  },
  "/posts/likes/show": {
    // 未実装
  },
  "/posts/reposts/show": {
    // 未実装
  },
  "/talks/history/show": {
    "type": /(user|limit)/,
    "limit": /[0-9]+/
  },
  "/talks/messages/unread/count": {
    // ペイロードなし
  },
  "/talks/messages/say": {
    "text": /(.+)/,
    "user-id": /([0-9a-zA-Z]){24}/,
    "file": /([0-9a-zA-Z]){24}/
  },
  "/talks/messages/show": {
    "message-id": /([0-9a-zA-Z]){24}/
  },
  "/talks/messages/read": {
    "message-id": /([0-9a-zA-Z]){24}/
  },
  "/talks/messages/stream": {
    // 未実装
  },
  "/talks/messages/delete": {
    // 未実装
  },
  "/talks/group/create": {
    // 動いてない
  },
  "/talks/group/show": {
    // 動いてない
  },
  "/talks/group/members/invite": {
    // 動いてない
  },
  "/talks/group/invitations/show": {
    // 動いてない
  },
  "/talks/group/invitations/accept": {
    // 動いてない
  },
  "/talks/group/invitations/decline": {
    // 動いてない
  },
  "/album/files/upload": {
    "file-name": /(.+)\.(png|jpeg|jpg|gif|webp)/,
    "mimetype": /image\/(jpeg|png|gif)/,
    "file": "pass",
    "size": /[0-9]+/,
    "folder-id": /([0-9a-zA-Z]){24}/,
    "unconditional": true || false
  },
  "/album/files/show": {
    "file-id": "string"
  },
  "/album/files/list": {
  },
  "/album/files/stream": {
  },
  "/album/files/move": {
  },
  "/album/files/rename": {
  },
  "/album/files/delete": {
  },
  "/album/files/update-tag": {
    // 動いてない
  },
  "/album/files/add-tag": {
    // 動いてない
  },
  "/album/files/remove-tag": {
    // 動いてない
  },
  "/album/files/find-by-tag": {
    // 動いてない
  },
  "/album/folders/create": {
    // 動いてない
  },
  "/album/folders/list": {
    // 動いてない
  },
  "/album/folders/show": {
    // 動いてない
  },
  "/album/folders/move": {
    // 動いてない
  },
  "/album/folders/rename": {
    // 動いてない
  },
  "/album/tags/create": {
    // 動いてない
  },
  "/album/tags/list": {
    // 動いてない
  },
  "/album/tags/recolor": {
    // 動いてない
  },
  "/album/tags/rename": {
    // 動いてない
  },
  "/album/tags/delete": {
    // 動いてない
  },
  "/hashtags/search": {
    "name": /(.+)/
  },
  "/hashtags/trend/show": {
    // ペイロードなしで固定で16件とってくる
  }
}
