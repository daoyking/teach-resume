export function ManageList(props: any) {
  return (
    <div class="mt-1">
        <div>
        <h3 class="text-2xl font-medium text-gray-800">{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
  )
}