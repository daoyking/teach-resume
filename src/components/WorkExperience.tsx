import { ManageList } from "./ManageList"

export function WorkExperience(props: any) {
  return (
    <li class="mb-4">
      <h2 class="text-3xl font-medium text-gray-800">{props.company}</h2>
      <div>
        <i class="bx bx-calendar text-sm" style="color: #666"></i>
        <small class="text-sm text-gray-600">{props.time}</small>
      </div>
      {
        props.manege.map((item:any) => {
          return (
            <ManageList title={item.title} content={item.content}></ManageList>
          )
        })
      }
    </li>
  )
}