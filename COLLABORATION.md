# Collaboration / 合作说明

## Candidate discovery / 候选发现

为公开仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) Topic 后，治理工作流会将它加入隐藏候选池。Topic 只负责发现，不会绕过 Registry 准入或直接提供安装入口。

Adding the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to a public repository places it in the hidden candidate pool. The topic is a discovery signal only and does not bypass Registry admission or create a direct installation entry.

## Plugin admission / 插件收录

新插件需在根目录 `package.json` 中声明有效的 `dsh.bundle`，提供安装或使用说明，并通过[插件收录 Issue](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)提交。Intake Agent 会使用默认分支的固定 commit SHA 检查仓库、Manifest、README 和已有检查，不执行外部仓库代码。

New plugins must declare a valid `dsh.bundle` in the root `package.json`, provide installation or usage guidance, and use the [plugin admission issue](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml). The Intake Agent evaluates the repository, manifest, README, and existing checks at an immutable default-branch commit without executing external repository code.

## Editor Picks / 编辑精选

编辑精选是人工有序集合，真值源是 `registry/collections/editor-picks.json`。候选项目必须先进入公开 Registry。

Editor Picks are a manually ordered collection whose source of truth is `registry/collections/editor-picks.json`. A candidate must already be present in the public Registry.

提交前请确认仓库公开可访问、与 DeepSeek Harness 生态相关、安装标识有效，且提交者有权代表该项目。

Before submitting, confirm that the repository is public, relevant to the DeepSeek Harness ecosystem, has a valid install identifier, and that the submitter is authorized to represent it.

## Review / 审核

插件记录需通过 Schema、身份唯一性、路径范围、不可变证据、治理策略和 Catalog 确定性门禁。`verified` 仅表示结构和证据通过，不代表 DeepSeek 或本项目对安全性、质量或运行时兼容性背书。

Plugin records must pass schema, identity uniqueness, path scope, immutable evidence, governance policy, and deterministic catalog gates. `verified` means the structural evidence passed; it does not imply endorsement of security, quality, or runtime compatibility by DeepSeek or this project.
