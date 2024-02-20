# ACT laboratory DNS zone configration
ラボのDNSレコード設定が置かれています。

# 環境構築
公式ドキュメントに従ってDNSControlコマンドをインストールします。

参考: https://docs.dnscontrol.org/getting-started/getting-started

必要に応じて、以下の環境変数にAPIトークンの情報を設定します。
- CLOUDFLARE_API_TOKEN: CloudflareのAPIトークン
- CLOUDFLARE_ACCOUNT_ID: CloudflareアカウントID

# 設定ファイルについて
- dnsconfig.js: DNSレコードの設定が記載されています。
- creds.json: DNSプロバイダーとの通信に必要な資格情報が記載されています。

# 型情報の生成
DNSレコードの設定に対応する型ファイルを生成することができます。これにより、IDEなどの保管やエラーチェックが有効になります。

リポジトリのルートで以下のコマンドを実行します:
```
dnscontrol write-types
```

# 編集について
安全のため、管理者以外はmasterには直接pushできないようになっています。一度新規のbranchにcheckoutしてから、適宜pullrequestを出していただき、管理者によるレビューを受ける必要があります。

なお、場合によってはラボのサービスの一部または全部が利用できなくなることもありえるため、DNSレコードの編集やレビューは慎重に行っていただくよう、十分ご注意ください。

## ラボのメンバーの場合
ラボのorganizationのメンバーの場合は、pullrequestを開くと、GitHub actionsにより、DNSへの繁栄をドライランした結果がコメントされます。こんな感じです:

```
******************** Domain: actlab.org
1 correction (cloudflare)
#1: + CREATE mail.actlab.org MX 5 alt2.aspmx.l.google.com. ttl=60
Done. 1 corrections.
```

編集者はこれを確認して、問題なければ管理者へレビューを依頼してください。pullrequestがmasterに取り込まれると、本番のDNSサーバへ自動的にレコードが反映されます。

## メンバー以外の新規contributionの場合
安全のため、新規で貢献してくださる方の場合は、ドライランした結果のコメントが自動では行われません。まず、管理者へレビューの依頼をお願いします。

管理者が承認すると、ドライランの結果がコメントされます。

# 参考
DNSレコードの書き方などについて、DNSControlの公式ドキュメントに詳しく記載されています。

[https://docs.dnscontrol.org/]
