import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className={style.sidebar}>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/qualifications">Qualifications</Link>
        </div>
        <div>
          <Link to="/experience">Experience</Link>
        </div>
        <div>
          <Link to="/info">Contact Info</Link>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;

// // import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// // import Divider from '@material-ui/core/Divider';
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   list: {
//     width: 350
//   },
//   fullList: {
//     width: "auto"
//   }
// });

// export default function Sidebar() {
//   // const classes = useStyles();
//   const [state, setState] = React.useState({
//     left: false
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div>
//       <List>
//         {[
//           <aside className={style.sidebarFirst}>
//             {/* Sidebar first: Fixed width */}
//             <div>
//               <Link to="/profile">Profile</Link>
//             </div>
//             <div>
//               <Link to="/qualifications">Qualifications</Link>
//             </div>
//             <div>
//               <Link to="/experience">Experience</Link>
//             </div>
//             <div>
//               <Link to="/info">Contact Info</Link>
//             </div>
//           </aside>
//         ].map((text, index) => (
//           <ListItem button key={text}>
//             {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
//   return (
//     <div>
//       <Button onClick={toggleDrawer("left", true)}>
//         <MenuIcon />
//       </Button>
//       <SwipeableDrawer
//         open={state.left}
//         onClose={toggleDrawer("left", false)}
//         onOpen={toggleDrawer("left", true)}
//       >
//         {sideList("left")}
//       </SwipeableDrawer>
//     </div>
//   );
// }
