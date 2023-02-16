import './suggestlist.modules.css';

type SuggestProps = {
    search: string;
}

export default function SuggestList({search} : SuggestProps){
    return (
        <>
            <div className="header-upper-suggest-list p-3 shadow-sm">
                <p className="mb-0">{search}</p>
            </div>
        </>
    )
}