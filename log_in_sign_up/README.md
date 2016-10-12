# log_in_sign_up

代码实现的 gif 来自[Yaroslav Zubko](https://material.uplabs.com/posts/7-1-log-in-sign-up)

## 收获

下面代码可以用来定义 placeholder 的样式。

```
input::-webkit-input-placeholder {
    color: #D0C4EE;
}
input::-moz-placeholder {
    color: #D0C4EE;
}
[placeholder]:focus::-webkit-input-placeholder {
  transition: opacity 0.5s 0.5s ease;
  opacity: 0;
}
```
另外运动曲线可以参考 [Robert Penner's Easing Functions](http://robertpenner.com/easing/)
