- ESModuleを利用できるように

package.jsonに以下の設定を追加します。

```json
{
  "type": "module"
}
```

- .ts を実行できるようなコマンド

```sh
node --loader ts-node/esm ./src/index.ts
```