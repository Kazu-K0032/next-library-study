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
      validate: validateComponentName,
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
      path: "src/components/{{location}}/{{kebabCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/{{location}}/{{componentTemplate location}}.hbs",
    }, {
      type: "add",
      path: "src/components/{{location}}/{{kebabCase name}}/{{pascalCase name}}.stories.tsx",
      templateFile: "plop-templates/{{location}}/{{componentTemplate location}}.stories.hbs",
    }, {
      type: "add",
      path: "src/components/{{location}}/{{kebabCase name}}/index.ts",
      templateFile: "plop-templates/{{location}}/index.hbs",
    }],
  })
}

/**
 * コンポーネント名のバリデーション
 * @description コンポーネントの命名規則
 * - PascalCase（大文字で始まり、英数字のみ）またはケバブケース（小文字とハイフン）を許可
 * @example Button, MyComponent, my-component
 *
 * @description フォルダ名の命名規則
 * - ケバブケース（小文字とハイフン）
 * @example button, my-component
 *
 * @param {*} value コンポーネント名
 * @returns {boolean|string} バリデーション結果
 */
const validateComponentName = (value) => {
  if (!value || value.trim() === '') {
    return 'コンポーネント名を入力してください';
  }
  // PascalCaseのバリデーション
  const pascalCasePattern = /^[A-Z][a-zA-Z0-9]*$/;
  // ケバブケースのバリデーション
  const kebabCasePattern = /^[a-z][a-z0-9]+(-[a-z0-9]+)*$/;

  if (pascalCasePattern.test(value) || kebabCasePattern.test(value)) {
    return true;
  }
  return 'コンポーネント名はPascalCase（例: Button, MyComponent）またはケバブケース（例: my-component）で入力してください';
}
