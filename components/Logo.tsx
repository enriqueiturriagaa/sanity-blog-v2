import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  
  return (
    <div className="flex items-center space-x-2">
        
         <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo