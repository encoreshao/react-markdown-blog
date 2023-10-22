### 使用NVM正确的为您的Ruby On Rails项目安装 Yarn, Node

- 此文章将介绍我们如何快速为您的 Ruby On Rails 项目添加 NVM 从而可以实现平滑部署，项目升级。

背景: 早前，我们只有一个 Ruby On Rails 的项目，所以使用全局的 Node 来编译 Rails 中的 JS 和实现一些数据抓取脚本。随着项目愈来愈来多，我们从而繁衍出来好多子项目，这样必然会导致不同时期的项目采用 Rails 和 Node 版本都不一样，对我们来讲，很难单独升级一些项目的项目。

- 所以，我们需要找到一个和 (rvm/rbenv) 一样可以轻松管理 Node 版本的工具，可以在部署或者运行时正确为其选择合适的 Node 版本。

此文本将会针对 Rails5 和 Node 14 和 20 来实施配置安装.

<br />

### 首先, 如何安装系统级的 NVM

- 因为我们服务器中会有多个用户，我想每个人正常使用，所以我选择安装系统级的 nvm。这样任何人都可以使用.

具体做法如下

1.  登录服务器后，请切换到root用户.
2.  创建一个名叫 "nvm" 的组 `groupadd nvm`
3.  把 `Root` 添加 NVM 组中，以方便后面操作 `usermod -aG nvm root`
4.  接下来使用源码安装

    - 创建目录 `mkdir /opt/nvm`
    - 将 `/opt/nvm` 目录的组权限给 NVM 用户 `chown :nvm /opt/nvm`
    - 设置权限，以便允许该组写入，并且所有文件都将继承该组 `chmod g+ws /opt/nvm`
    - 下载 NVM 源码: `cd /opt/nvm; git clone https://github.com/nvm-sh/nvm.git .`
    - 为了确保该组还可以写入别名、缓存下载和安装全局包，请确保目录存在并具有正确的权限
      <Code language="javascript">
      mkdir /opt/nvm/.cache
      mkdir /opt/nvm/versions
      mkdir /opt/nvm/alias
      chmod -R g+ws /opt/nvm/.cache
      chmod -R g+ws /opt/nvm/versions
      chmod -R g+ws /opt/nvm/alias
      </Code>

5.  配置NVM根目录，设置启动脚本。 使用以下代码片段创建Shell文件 `/etc/profile.d/nvm.sh`，文件头为 `#!/bin/bash`
    <Code language="javascript">
    export NVM_DIR="/opt/nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
    </Code>
6.  需要确保脚本是可执行的 `chmod +x /etc/profile.d/nvm.sh`
7.  我们需要在非交互式会话中使用 nvm，请确保在 `/etc/bash.bashrc` 中添加 `. /etc/profile.d/nvm.sh`
    <Code language="javascript">
    if [ -f /etc/profile.d/nvm.sh ]; then
    . /etc/profile.d/nvm.sh
    fi
    </Code>
8.  最后，安装其需要的 Node 版本(14, 20), 在我们案例中，我们需要将最新版本20设置为默认 node 版本
    <Code language="javascript">
    nvm install v14.16.1
    nvm install v20.8.0
    nvm alias default v20.8.0
    </Code>

#### 如何在 Rails 项目切换 Node 版本

<br />

我们的 Rails 使用的 Capistrano 来进行部署的，所以，我们需要找到其相关Gem来帮我们完成这件事情.

1. 添加 `capistrano-nvm` to `Gemfile`
2. 添加 NVM 在 `Capfile` 文件中 `require 'capistrano/nvm'`
3. 添加部署脚本的 hooks 在 `config/deploy.rb`
   <Code language="javascript">
   set :nvm_type, :user
   set :nvm_custom_path, "/opt/nvm"
   set :nvm_node, 'v14.16.1'
   set :nvm_map_bins, %w{node npm yarn webpack rake}
   </Code>
4. 如果一切正常，此时我们应该可以正确部署 Rails 项目到对应的服务器。
   <Code language="javascript">
   bundle install
   bundle exec cap production deploy
   </Code>

最后, 需要这些会对您有帮助!!!

<br />

### 其他链接

- [Previous - Javascript](javascript)
- [Next - Ruby on Rails](rubyonrails)

<br />
<br />
