interface Props{
    num_page : number;
    modif_page : React.Dispatch<React.SetStateAction<number>>; //React.Dispatch<React.SetStateAction<number>> est le type TypeScript officiel pour les setter qui modifie les nombres lors de l'utilisation du hook useState
    isDisplay : boolean;
    rechercher : (page:number)=>any;
    nbre_compte : number;
}

function PaginationButtons({num_page, modif_page, isDisplay, rechercher, nbre_compte}: Props) {
    
        function soustraction_page():any{
            let new_page = num_page - 1
            modif_page(new_page)
            rechercher(new_page)
        }
        function addition_page():any{
            let new_page = num_page + 1
            modif_page(new_page)
            rechercher(new_page)
        }

    
    if (isDisplay) {
        return(
            <div className="join grid grid-cols-2">
                <button className="join-item btn btn-outline" disabled={num_page === 1} onClick={()=> soustraction_page()}>Page precedente</button>
                <button className="join-item btn btn-outline" disabled={nbre_compte === 1} onClick={()=> addition_page()}>Page suivante</button>
            </div>
        )
    }
    return null
}

export default PaginationButtons