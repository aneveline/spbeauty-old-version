import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='justify-content-between d-inline-flex flex-column gap-4 mt-4 col' class="addresses">
            <div className='title d-inline-flex flex-column gap-2'>Адреса заведений
                <ListElement className='gap-3'>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement className='gap-3'>Санкт-Петербург, Казанская ул, 7</ListElement>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;