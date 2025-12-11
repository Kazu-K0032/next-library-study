module.exports = function (plop) {
  // テンプレートファイル名を決定するヘルパー関数
  plop.setHelper('componentTemplate', function (location) {
    return location === 'layout' ? 'LayoutComponent' : 'Component';
  });

  // ジェネレーターを定義
  // https://plopjs.com/documentation/?utm_source=chatgpt.com#setgenerator
  plop.setGenerator('component', {
    description: "コンポーネント作成",

    // ユーザーへの質問
    prompts: [{
      type: "input",
      name: "name",
      message: "コンポーネント名を入力してください:",
    }, {
      type: "list",
      name: "location",
      message: "生成先を選択してください",
      choices: [
        { name: "src/components/components", value: "components" },
        { name: "src/components/layout", value: "layout" }
      ]
    }],

    // 実行アクション
    actions: [{
      type: "add",
      path: "src/components/{{location}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/{{location}}/{{componentTemplate location}}.hbs",
    }, {
      type: "add",
      path: "src/components/{{location}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      templateFile: "plop-templates/{{location}}/{{componentTemplate location}}.stories.hbs",
    }, {
      type: "add",
      path: "src/components/{{location}}/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/{{location}}/index.hbs",
    }],
  })
}
