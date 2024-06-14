import React from "react";
import "./styles.css";

export class Navbar extends React.Component {
    render(){
        return (
            <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img className="navbar-image" src="https://s3-alpha-sig.figma.com/img/ba2d/713b/4b14561af855e7c2ccc89d05cd5dafa5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R3ANEKxUExzRu7zEn489xLJdz9mIAbd6-c-8P7DYdFLRHHnj6sibS6SQJKFvlBtHm~S3DrRIAqbNjU0jOJADeKDFz3Yvfrc69P18LcsjwHSuwSeHG-9KC2T5lS80ImbhlLCZCoIuNWG3oWpGftw~~SOSN8aKwiI0Ldsaae~8phjcX1FUcH1fsMuaJr0N05QTeOiVkh0T~hvYAHeg23ppSNLzegj9~Mb1S9~50wyZTw0TeKLCLVA7EAPNv6-D0zOrM6TQcY5rRRBsJG9rNHNXGfX54GtxvBVXvAPOpF2jIcxYv2GHlXmQUV0dtXyrnW-Ajr9~2B2V~DP8gIt8I0Vc3g__" alt="logo" />
                        <h1>Space Flight News</h1>
                    </div>

                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Trending</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">About us</a></li>
                    </ul>
                </nav>

            </header>
        )
    }
}

// export default Navbar;