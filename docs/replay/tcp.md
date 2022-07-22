# TCP 流量

## 录制

## 回放

tcpreplay是一系列工具的集合。包括（tcpprep、tcprewrite、tcpreplay和tcpbridge）
其中tcpreplay是真正实现流量回放功能的工具，其他几个工具可以看作tapreplay的辅助工具，作为流量重放前期的准备工作，比如
tcpprep可以划分哪些包是client的, 哪些是server的, 一会发包的时候client的包从一个网卡发, server的包可能从另一个网卡发。
tcprewrite可以就是修改2层, 3层, 4层报文头部，也就是可以将IP，MAC等信息修改为你期望的值。

官网： http://tcpreplay.appneta.com/

Quick started

```bash
# 查看网卡信息
tcpreplay --listnics 

# 重放
tcpreplay -i eth0 p.pcap

#将 p.pcap 文件进行 tcpprep 操作，制作 cache 文件。
tcpprep -an client -i p.pcap -o p.cache –v
```

