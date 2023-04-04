var express = require("express");
var router = express.Router();
var querySql = require("../db/index");
// 用于生成jwt字符串
const jwt = require("jsonwebtoken");
const { PRIVATE_KEY, EXPIRESD, refresh_time } = require("../utils/constant");
const { setToken } = require("../utils/useJWT");

/* GET users listing. */
router.get("/info", function (req, res, next) {
  res.send({ code: 0, msg: "返回了信息！" });
});

// 登录接口
router.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  try {
    let user = await querySql("select id from user where username = ?", [
      username,
    ]);
    if (!user || user.length === 0) {
      res.send({ code: 400, msg: "该账号不存在" });
    } else {
      let result = await querySql(
        "select * from user where username = ? and password = ?",
        [username, password]
      );
      if (!result || result.length === 0) {
        res.send({ code: 400, msg: "账号或者密码不正确" });
      } else {
        let userInfo = await querySql(
          "select id,username,nickname,head_img,role from user where username = ? and password = ?",
          [username, password]
        );
        // token过期后，需要靠refreshToken来重新获取token。
        let token = setToken(username).token;
        let refreshToken = setToken(username).refreshToken;
        //分权限，如果是admin，那就发送admin的标识，，否则发普通vip标识。
        res.send({
          code: 200,
          msg: "登录成功",
          token,
          refreshToken,
          expiresIn: refresh_time,
          userInfo,
        });
      }
    }
  } catch (e) {
    res.send({ code: 400, msg: "失败" });
    console.log(e);
    next(e);
  }
});

//注册接口
router.post("/register", async (req, res, next) => {
  let { username, password, nickname } = req.body;
  try {
    let user = await querySql("select * from user where username = ?", [
      username,
    ]);
    // 问号占位符，后面既是赋值给占位符。
    if (!user || user.length === 0) {
      if (username === "admin") {
        //账号或者角色 是管理员admin即可
        let role = "admin";
        await querySql(
          "insert into user(username,password,nickname,role) value(?,?,?,?)",
          [username, password, nickname, role]
        );
      } else {
        let role = "vip";
        await querySql(
          "insert into user(username,password,nickname,role) value(?,?,?,?)",
          [username, password, nickname, role]
        );
      }
      res.send({ code: 200, msg: "注册成功" });
    } else {
      res.send({ code: 400, msg: "该账号已注册" });
    }
  } catch (e) {
    res.send({ code: 400, msg: "失败" });
    console.log(e);
    next(e);
  }
});

module.exports = router;
