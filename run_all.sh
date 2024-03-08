#!/bin/bash

# 检查是否安装了docker
if ! [ -x "$(command -v docker)" ]; then
  echo '錯誤: docker未安装。' >&2
  exit 1
fi

# 运行docker-compose命令
docker-compose up -d

# 输出结束语
echo "Docker Compose 已啟動。"