import React from 'react'

function Footer() {
  return (
    <div >
            <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Quick links</h3>
                        <ul>
                            <li><a href="/linije">GSP linije</a></li>
                            <li><a href="/omiljene">Omiljene linije</a></li>
                            <li><a href="/kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Mozete nas naci</h3>
                        <ul>
                            <li><a href="#">Kneginje Ljubice 29</a></li>
                            <li><a href="#">Beograd</a></li>
                            <li><a href="#">011 234567</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Usluge</h3>
                        <ul>
                            <li> Gradski prevoz</li>
                            <li>Reklama na autobusu</li>
                            <li>Baner na sajtu</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    </div>
    </div>
  );
}

export default Footer;