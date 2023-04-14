import './App.css';

function Check() {

    const checkStatus = (e) => {
        e.preventDefault();
        var form = document.querySelector("#formElement");
        console.log(form)


    };


    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img alt='logo' src="logo.png" width="112" height="28" />
                    </a>
                    <div class="navbar-menu" id="navMenu">
                    </div>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href='/'>Home</a>
                        <a class="navbar-item" href='/'>Help</a>
                    </div>
                </div>
            </nav>
            <hr style={{ marginTop: "0px" }} />
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">

                    <section class="section">
                        <h1 class="title">Check Verification Status</h1>
                        <form id="formElement" encType="multipart/form-data" method="post">
                            <div class="field">
                                <label class="label">Wallet Address</label>
                                <div class="control">
                                    <input type="text" class="input is-rounded" name='wallet' id="wallet" />
                                </div>
                            </div>

                            <div class="field">
                                <button id="checkbtn" class="button is-primary is-rounded"
                                    onClick={checkStatus}>Check</button>
                            </div>

                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Check;
