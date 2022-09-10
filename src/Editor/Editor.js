import E from 'wangeditor';
import React,{ useEffect } from 'react';
let ref = React.createRef()
function Editor(){
    useEffect(() => {
        console.log(ref)
        const editor = new E(ref.current)
        editor.config.onchange = function (newHtml) {
            console.log('change之后最新的html', newHtml)
        }
        editor.create()
        //txt.html()必须在创建编辑器之后
        editor.txt.html('<p>用js设置的内容</p>')
    },[])
    return (
        <div ref={ref}></div>
    )
}
export default Editor;