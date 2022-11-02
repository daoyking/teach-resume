export function PersonalProfile(props: any) {
  switch (props.tag) {
    case 'name':
    return (
      <h1 class="text-2xl text-xl text-gray-800 font-bold">{props.name}</h1>
    )
    case 'wechat':
    return (
      <div class="text-gray-600 md:hidden mt-1">{props.name}</div>
    )
    default:
    return (
      <div class="md:text-lg text-gray-600">{ props.name }</div>
    )
  }
}