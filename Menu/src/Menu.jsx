import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} item={menuItem} />;
      })}
    </div>
  );
};

export default Menu;
