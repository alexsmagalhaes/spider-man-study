import { TagStyled } from "./styles";

interface TagProps {
   textBase: string,
   textAuxiliar?: string,
}

export function Tag({ textBase, textAuxiliar }: TagProps) {
   return (
      <TagStyled>
         <div className="tag_main">
            {textBase}
         </div>

         {!textAuxiliar || <>
            <div className="tag_auxiliar">
               {textAuxiliar}
            </div>
         </>}
      </TagStyled>
   )
}