해당 내용은 기존 과제와는 다른
REACT-ROUTER-DOM을 이용하여 동작하는 원리는 확인하는 용도로 사용된다.

(기존 과제에서는 HistoryApi만을 이용하여 처리하기 때문에 Routes, Route 컴포넌트도 직접만들어주며 그에 따르는 pushState와 뒤로가기 버튼을 통해 url변경은 할 수 있어도 렌더링을 진행하기 위한 상태값을 따로 두어 상태값을 갱신하였다.)

현재 REACT-ROUTER-DOM의 경우는 해당 처리들이 필요없이 REACT-ROUTER-DOM에서 제공하는 Routes,Route를 통해 처리하고
url 변경은 navigate를 이용하며 이에따라 저절로 페이지 url이 바뀌며 렌더링도 진행되는 것을 확인할 수 있다.
