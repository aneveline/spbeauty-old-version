import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex justify-content-between flex-column gap-4 mt-4 col' class="addresses">
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;