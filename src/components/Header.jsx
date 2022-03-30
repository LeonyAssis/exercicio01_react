import Topics from './Topics'
import Search from './Search'

export default _ => (
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="d-flex justify-content-start">LOGO</div>
                </div>
                <div class="col-8">
                    <div class="d-flex justify-content-end"><Topics /></div>
                    <div class="d-flex justify-content-end"><Search /></div>
                </div>
            </div>
        </div>
    </header>
)

