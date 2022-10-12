# 📖 Next.js로 마크다운 블로그 만들기 (1/2)

<aside>
💡 Next.js로 마크다운으로 작성한 블로그를 정적 페이지(SSG)로 작성해주세요.

</aside>

**:: 폴더 구조 및 라우팅**

- 사용자는 루트 경로의 `__posts` 폴더에 작성된 마크다운 파일(`.md`)를 작성할 수 있어야 합니다. 해당 파일은 마크다운 본문과 게시물에 대한 meta data를 담을 수 있어야 합니다. 아래는 마크다운에 jekyll에서 만든 `frontmatter`라는 문법([링크](https://jekyllrb.com/docs/front-matter/))을 적용한 예시입니다.

  ```markdown
  ---
  categories:
    - Development
    - VIM
  date: "2012-04-06"
  description: 설명을 적는 곳입니다
  slug: spf13-vim-3-0-release-and-new-website
  tags:
    - .vimrc
    - plugins
    - spf13-vim
    - vim
  title: hello
  ---

  ## 예시입니다

  - 예시입니다
  ```

- 블로그에 작성된 게시물을 렌더링하는 `목록 페이지`와 개별 게시물을 렌더링하는 `상세 페이지`로 나누어 작성해주세요.
  - `/` - 목록 페이지
  - `/[id]` - 상세 페이지
  - 마크다운을 JavaScript로 변환해주는 도구는 `remark`(마크다운 Parser), `remark-html`(remark로 파싱한 데이터를 html로 변환) 을 참고
  - 각 마크다운의 meta data는 `gray-matter`, `frontmatter` 참고
  - 마크다운을 React에 삽입할 때는 `dangerouslySetInnerHTML` 을 사용 ([참고 링크](https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml))
  - (추가 구현) 코드 하이라이터는 `highlight.js`, `prism.js` 를 참고

**:: Next.js에서 지원하는 Prefetching 메서드를 적절히 사용해주세요.**

- 정적 페이지를 생성할 때 필요한 데이터 생성 → `getStaticProps`
- 각 포스트를 그려줄 상세 페이지 경로를 생성 → `getStaticPaths`

# 📚 구현 내용
<img width="286" alt="image" src="https://user-images.githubusercontent.com/59253551/194834486-8b7a7fdb-c23e-4b10-b46c-2a1a475bd97e.png">

## SSG를 사용을 위한 getStaticProps 생각 필요 (getServerSideProps는 SSR과 연관)

## 목록페이지와 상세페이지 판단

## 마크다운을 HTML 형태로 만드는 방법

```js
const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(data);
```

> remark(마크다운 Parser), remark-html(remark로 파싱한 데이터를 html로 변환) 을 참고
> [링크](https://github.com/remarkjs/remark)

## 파일과 폴더를 읽는 방법

### 폴더 읽기

`fs.readdirSync("__posts");`

### 파일 읽기

```js
const fileData = fs.readFileSync(`__posts/${params.id}`, "utf-8");
```

> `readFile`을 사용할경우 진행되는 처리가 Promise로 전달되거나 undefined로 갱신이 안되는 상황이 발생하기에 `readFileSync`를 사용

## getStaticPaths와 getStaticProps

getStaticProps: 빌드 시 데이터를 fetch하여 static 페이지를 생성
getStaticPaths: pages/\*\*/[id].tsx 형태의 동적 라우팅 페이지 중, 빌드 시에 static하게 생성할 페이지를 정함

### 동적페이지의 경우
getStaticProps를 사용하지 않고 getStaticPaths만 쓴다면 `Error : Without getStaticProps, getStaticPaths does nothing` 라고 한다. 
즉, getStaticPaths를 위해 getStaticProps는 필요하다는 것이다.

# 🔥 실행결과
<img width="196" alt="image" src="https://user-images.githubusercontent.com/59253551/194836406-cd8ffe4b-1dcc-4af6-91d6-595bef74ac25.png">

## 1.md
```md
# This is a H1
## This is a H2
### This is a H3
```
<img width="233" alt="image" src="https://user-images.githubusercontent.com/59253551/194836416-6c570f25-5cb0-4a55-9fa9-1f13dacd9607.png">

## 2.md
```md
#### This is a H4

##### This is a H5

###### This is a H6
```
<img width="238" alt="image" src="https://user-images.githubusercontent.com/59253551/194836470-6742d563-43ea-46e8-b091-872a13c1e531.png">

## 3.md
```md
# 1. CSR(Client-side Rendering)이란 무엇이며, 그것의 장단점에 대하여 설명해주세요.

> CSR이란 클라이언트단에서 렌더링을 진행하는 것으로
> 해당 장점으로는 페이지를 이동할 때마다 깜빡임이 없이 렌더링 되어 사용자 측면에서 좋으나
> 단점으로 HTML이 채워지는데 SEO가 최적화를 거의 못하기 때문에 안좋고 초기 렌더링이 client에서 일어나 시간이 다소 소요된다.

# 2. SPA(Single Page Application)로 구성된 웹 앱에서 SSR(Server-side Rendering)이 필요한 이유에 대하여 설명해주세요.

> SSR로 SEO의 성능을 늘려줄수 있고 초기 렌더링 시에 CSR에 비해 서버에서 렌더링을 진행하여 CSR에 비해 렌더링 시간이 빠르기 때문에 UX적으로 빠르게 렌더링 된 화면을 볼 수 있다.
```

<img width="1280" alt="image" src="https://user-images.githubusercontent.com/59253551/194836434-ff9b11c8-43d9-49e8-8fde-a58e3c65a5e4.png">

# 📑 깨달은 점

1. node.js에서 파일을 가져오는 방식에 대한 개념도 기본적으로는 알아야 이러한 과제를 대처할 수 있을것이라 생각
2. fs를 사용하는데 있어서 CSR부분의 코드가 아닌 SSR이나 SSG부분의 코드에서 사용할 수 있는 파일의 가져오기 부분이라고 생각
3. 마크다운을 HTML로 처리하는 방법에 대해서 처음 알게되어 흥미로웠다

# 🤔 아쉬운점

> `[id].js` 코드에서 return path를 1.md, 2.md, 3.md 고정시켜놨는데 md 파일이 추가되면 어떻게 처리해야하는 것인지에 대한 의문이 남는다. (일일히 하나하나 추가하는 불편함이 있지않나 생각이든다.)
> 아직 getStaticPaths에 대한 이해가 부족하다고 생각한다.
