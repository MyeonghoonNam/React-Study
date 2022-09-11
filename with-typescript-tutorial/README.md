# Description

CreateReactApp + Typescript + ESLint + Prettier의 초기 환경 셋업 과정

## 1. CreateReactApp + Typescript

```
$npx create-react-app "프로젝트명" --template typescript
```

설치된 프로젝트에서 불필요한 파일들을 제거한다.

## 2. tsconfig.json Update

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "baseUrl": "./src", // 이 코드를 추가하여 경로명 문제 간소화
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
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

### step 3) install ESLint & SetUp

```
$npm install -D eslint // 설치
$npx eslint --init // 설정
```

```
// .eslintrc.json 파일 설정
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"plugin:react/recommended",
		"airbnb",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-hooks", "@typescript-eslint"],
	"rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/explicit-function-return-type": "off",
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [
			2,
			{ "extensions": [".js", ".jsx", ".ts", ".tsx"] }
		],
		"import/extensions": [
			2,
			"ignorePackages",
			{
				"js": "never",
				"jsx": "never",
				"ts": "never",
				"tsx": "never"
			}
		]
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx"],
				"moduleDirectory": ["node_modules", "@types"]
			},
			"typescript": {}
		}
	}
}
```

## 4. Prettier

### step 1) VScode extension에서 prettier 설치 <br/>

### step 2) prettier install

```
npm i -D prettier
npm i -D eslint-config-prettier eslint-plugin-prettier
```

### step 3) prettier setup

```
// .eslintrc.json 파일 수정
// extends와 rules에 prettier 추가
extends: [
  'plugin:react/recommended',
  'airbnb',
  'plugin:prettier/recommended', // 순서가 중요함 가장 뒤에
],
rules: {
  'prettier/prettier': 'error',
  ...
},
```

```
// .prettierrc.json 파일 생성 및 수정
{
	"singleQuote": true,
	"semi": true,
	"useTabs": true,
	"tabWidth": 2,
	"printWidth": 80,
	"arrowParens": "always"
}
```

## 5. VScode setup

```
// settings.json에 아래 코드 추가
{
  ...

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascriptreact]":{ "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }

 ...
}
```
