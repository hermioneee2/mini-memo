# Mini Memo - ![](https://img.shields.io/badge/license-MIT-blue)

- Mini Memo는 편리하고 예쁜 웹 기반 메모장입니다.
- KAIST 2021 Fall CS420 수업의 과제로 제작되었습니다.



![image](https://user-images.githubusercontent.com/78776430/144987885-7efc61cf-b193-4f9b-8bfa-35737217d940.png)


# Getting Started

## Prerequisites

- npm 혹은 yarn 등의 Javascript package manager가 필요합니다.

## Installing

- https://github.com/hermioneee2/mini-memo 에 들어간 후 소스코드를 컴퓨터에 clone합니다.
- npm install을 통해 dependency를 설치합니다.
- npm start를 입력하여 시작합니다.

## Having Trouble?

- npm start 후 에러가 뜬다면 F12(개발자 도구) - Application - localStorage를 삭제해보세요!

# Usage
## 기능 소개

![image](https://user-images.githubusercontent.com/78776430/144853832-c9692dec-0a9a-47c7-ad05-86d235d0167b.png)

- 필수 기능
  - 메모 생성 / 수정 / 삭제
  - 메모 편집 및 텍스트 속성 변경(볼드, 밑줄, 색상 등)
  - 메모 나열(목록형 / 포스트잇형)
  - API 연동: URL 단축
- 추가 기능
  - 메모 정렬(시간순 / 제목순)
  - 폴더를 이용한 메모 분류
  - 스킨설정(Dark / Light)

- 상세한 사용 방법 및 각 component에 대한 설명은 다음을 참조.
  (https://github.com/hermioneee2/mini-memo/wiki)

## 메모 생성/ 수정 / 삭제

- 우측 하단의 생성 버튼을 클릭하여 메모 생성
- 수정하고자 하는 메모를 클릭하여 메모 수정
- 헤더바의 휴지통 아이콘을 누른 후 삭제하고자 하는 메모를 클릭하고 ‘Delete selections’을 클릭하여 메모 삭제

![image](https://user-images.githubusercontent.com/78776430/144839730-25c958cb-2f89-42b0-8232-b6b3c68db80a.png)

## 메모 텍스트 속성 변경(볼드, 밑줄, 색상 등)

- 텍스트 속성을 변경하고자 하는 부분을 드래그하고, 편집화면 하단의 버튼을 클릭하여 속성을 변경
  ![image](https://user-images.githubusercontent.com/78776430/144840013-f0aa0851-a6db-4038-ba0d-bfab8a7fa024.png)
- URL 링크의 경우 드래그하여 링크 아이콘 클릭 후, save 버튼을 눌러 바로가기 생성
  ![image](https://user-images.githubusercontent.com/78776430/144842970-6f5eec61-baba-4352-a620-ae3a0d0e7594.png)

## 메모 나열(목록형 / 포스트잇 형)

- 헤더바의 sort by 우측에 있는 첫번째 아이콘을 눌러 목록형과 포스트잇형을 토글 형식으로 전환 (포스트잇형을 누르면 아이콘이 리스트로 바뀜)
- 디폴트로 목록형을 보여주지만 자유롭게 토글 가능
- 목록형의 경우 간결함을 위해 제목만 보여주고, 포스트잇형의 경우 메모 내용을 전부 보여줌
  ![image](https://user-images.githubusercontent.com/78776430/144839836-d1d01a6d-64c8-4b20-b784-f451a8d8adc4.png)

## API 연동: URL 단축

- 단축하고자 하는 URL을 편집화면 하단의 “Shorten your URL here”에 붙여넣고 오른쪽 노란색 전환버튼을 누르면 단축된 URL이 클립보드에 복사됨 (사용자가 메모 안에서 자유롭게 원하는 위치에 ctrl+V로 단축된 URL을 붙여넣을 수 있도록 클립보드 복사를 지원함)
- 단축된 URL은 편집화면 하단에 작은 회색 글씨로 표기 (클립보드에 복사되어 보이지 않지만 URL이 성공적으로 단축되었다는 것을 보여주기 위함)
- 유효하지 않은 URL이면 경고 팝업을 띄움

![image](https://user-images.githubusercontent.com/78776430/144843120-6c31ee25-5c46-4966-8417-6b98e325427d.png)

## 메모 정렬(시간순 / 제목순)

- 헤더바에서 Sort By의 캐스케이드 방식을 통해 메모를 정렬
- 시간순과 제목순에서 각각 오름차순과 내림차순을 선택
- 메모의 경우 최종 수정 시간, 폴더의 경우 생성 시간을 기준으로 함
  ![image](https://user-images.githubusercontent.com/78776430/144840395-9a68d7d3-2ae6-4bed-b0b8-c5b69a8626fa.png)

## 폴더를 이용한 메모 분류

- 헤더바 상단의 두번째 아이콘을 클릭하여 폴더의 이름을 입력하고 현 위치에 폴더를 생성
- 메모 삭제 방식과 동일하게 휴지통 아이콘으로 폴더를 선택하여 삭제할 수 있음
- 현재 폴더명과 위치는 브레드크럼 방식으로 헤더바 아래쪽에 보여짐

## 스킨설정(Dark / Light)

- 헤더바 상단의 마지막 아이콘인 설정 버튼을 클릭하여 Dark theme과 Light theme을 선택
  ![image](https://user-images.githubusercontent.com/78776430/144841070-ef18b49c-8cd6-4fc5-a3d4-08a1eb365530.PNG)

## Authors

심유성(Yusung Sim): https://github.com/yusungsim

이동규(Donggyu Lee): https://github.com/qwqw3535

이혜림(Hyerim Lee): https://github.com/hermioneee2

김윤(Yun Kim): https://github.com/YunKim-kaist

# Dependency

## 사용한 주요 Library

- React
- MobX
- React-Quill
- Express.js
- concurrently
- start-react-app
- styled-components

자세한 내용은 package.json을 참조

## @systemop/localstorage-fs
- 프로젝트의 데이터 관리를 위해 직접 만든 library(by Yusung Sim)
- npm 주소: https://www.npmjs.com/package/@systemop/localstorage-fs
- 라이브러리 인터페이스 설계 문서 https://drive.google.com/file/d/1t1MPm0PTJocIzfeCcEP03TpXj2aEKe7c/view

# License

MIT License
