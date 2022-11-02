export function UserInfo(props: any) {
  if (props.url) {
    return (
      <a
        href={props.url}
        class="my-5 flex"
        target="_blank"
      >
        <div class="mr-2">
          <span class={`iconfont ${props.icon}`}></span>
        </div>
        <span class="text-blue-500">{ props.info }</span>
      </a>
    )
  } else {
    return (
      <div class="my-5 text-lg text-gray-600 flex">
        <div class="mr-2">
          <span class={`iconfont ${props.icon}`}></span>
        </div>
        {props.info}
      </div>
    )
  }
}