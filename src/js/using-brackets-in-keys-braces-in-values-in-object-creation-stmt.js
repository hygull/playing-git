## https://stackoverflow.com/questions/32515598/square-brackets-javascript-object-key


> let o = {[key]: "ruby"}
> let key = "lang";
undefined
>
> o
{ lang: 'ruby' }
>
> let o2 = {[key]: "ruby"}
undefined
> let o3 = {key: "ruby"}
undefined
>
> o3
{ key: 'ruby' }
>
> uuid = () => 12;
[Function: uuid]
>
> let obj = (id => ({ [id]: {id} }))(uuid());
undefined
> obj
{ '12': { id: 12 } }
>
> id = 2
2
> { [id]: {id}}
{ '2': { id: 2 } }
>

