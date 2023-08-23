---
title: HTTPS - TSL 指纹
---

## TLS Versions

| TLS Version | Value |
| --- | --- |
| 1.0 | 769 |
| 1.1 | 770 |
| 1.2 | 771 |
| 1.3 | 772 |

<https://docs.microsoft.com/en-us/dotnet/api/system.security.authentication.sslprotocols?view=net-5.0>

## TLS Cipher Suites

IOS: 默认使用 NSURLSession 网络调用

<https://developer.apple.com/documentation/foundation/nsurlsession>

Android: 碎片化比较多，不同的厂商有不同的实现。还有可能刷机的用户自己修改了默认的配置。

Browser: 一般使用操作系统的默认配置，依赖系统 openssl 库，要对指纹浏览器进行探测。

## Fake Fingerprint

- python: <https://github.com/wangluozhe/requests-go>
- go: <https://req.cool/docs/tutorial/tls-fingerprint/>
