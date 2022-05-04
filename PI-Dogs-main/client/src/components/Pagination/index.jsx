import './styles.css'

export default function Pagination ({ allDogs, dogsPages, paginate }) {

    const pages = [];

    for(let i = 1; i <= Math.ceil( allDogs / dogsPages ); i++) {
        pages.push(i);
    }


    return (
        <div className='paginate-main'>

            <div className='algo'>
            
                {
                    pages.length && pages.map( e => (
                        <div key={e} className="btn paginate btn-exception" onClick={() => paginate(e)}>
                            {e}
                        </div>
                    )) 
                }

            </div>

        </div>
    )

}