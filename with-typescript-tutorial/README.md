# Description

CreateReactApp + Typescript + ESLint + Prettier의 초기 환경 셋업 과정

## 1. Library Install

```
$npx create-react-app "프로젝트명" --template typescript

$npm i -D eslint prettier
$npm i -D eslint-config-prettier eslint-plugin-prettier
$npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

$npx install-peerdeps --dev eslint-config-airbnb
```

설치된 프로젝트에서 불필요한 파일들을 제거한다.

## 2. tsconfig.json Update

```
{
	"compilerOptions": {
		"allowJs": true,
		"target": "ES5",
		"module": "ES2015",
		"skipLibCheck": true,
		"outDir": "dist",
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"forceConsistentCasingInFileNames": true,
		"noFallthroughCasesInSwitch": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"moduleResolution": "Node",
		"lib": ["ES2015", "DOM", "DOM.Iterable"],
		"noImplicitAny": true,
		"strict": true,
		"strictNullChecks": true,
		"alwaysStrict": true,
		"strictFunctionTypes": true
	},
	"include": ["src/**/*.tsx"],
	"exclude": ["node_modules", "**/*.spec.tsx"]
}

```

## 3. ESLint

### step 1) VScode extension에서 eslint 설치 <br/>

### step 2) default config 제거

```
// package.json에서 아래 코드 제거

"eslintConfig": {
   "extends": [
     "react-app",
     "react-app/jest"
   ]
 },
```

### step 3) Eslint SetUp
```
// .eslintrc.json 파일 설정
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["@typescript-eslint", "react-hooks"],
	"extends": [
		"airbnb",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"rules": {
		"prettier/prettier": ["error", { "endOfLine": "auto" }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"ts": "never",
				"tsx": "never"
			}
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	}
}


```

## 4. Prettier

### step 1) VScode extension에서 prettier 설치 <br/>

### step 2) Prettier Setup

```
// .prettierrc.json 파일 생성 및 수정
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": true,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always"
}

```

## 5. VScode setup

```
// settings.json에 아래 코드 추가
{
  ...

  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

 ...
}
```
