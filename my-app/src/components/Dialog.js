import React from 'react'
function Dialog(props){
    console.log(props.children)
    // 备选消息
    const messages = {
        "foo": {title: 'foo', content: 'foo~'},
        "bar": {title: 'bar', content: 'bar~'},
    }
    //执行函数时获得要显示的内容
    const {body,footer} = props.children(messages[props.msg])
     return (
        <div style={{border:'1px solid red'}}>{props.children.def}
            {/* 此处显示的内容是动态生成的 */}
            {body}
            <div>
                {footer}
            </div>
        </div>
    )
}

export default function Composition() {

    return (
        <div>
            <Dialog msg="foo">
                {
                   ({title,content})=>({
                        body:(
                            <>
                                <h1>{title}</h1>
                                <h1>{content}</h1>
                            </>
                        ),
                        footer:<button onClick={()=>alert('react确实好')}>确定</button>
                    })
                }
            </Dialog>
        </div>
    )
}
