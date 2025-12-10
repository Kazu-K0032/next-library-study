module.exports = function (plop) {
  // ジェネレーターを定義
  // https://plopjs.com/documentation/?utm_source=chatgpt.com#setgenerator
  plop.setGenerator('component', {
    description: "コンポーネント作成",

    // ユーザーへの質問
    prompts: [{
      type: "input",
      name: "name",
      message: "コンポーネント名を入力してください:",
    }],

    // 実行アクション
    actions: [{
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/Component.hbs",
    }, {
      type: "add",
      path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
      templateFile: "plop-templates/Component.stories.hbs",
    }, {
      type: "add",
      path: "src/components/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/index.hbs",
    }],
  })
}
