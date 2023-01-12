import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CustomTable.css";

const CustomTable = ({
  users,
  handleEditClick,
  handleRemoveClick,
  // onSortClick,
}) => {
  return (
    <table>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <td className="edit_remove_users">
              <p className="fonts">
                <td>{index + 1}.</td>
                <td>{user.userName}.</td>
                <td>{user.userSurname}</td>
                <td>({user.userOld}years old)</td>
              </p>
              <div className="edit_remove">
              <CustomButton
                label="edit"
                classNames="edit-ection"
                handleClick={handleEditClick}
                data={{ index, user }}
                type="button"
              />

              <CustomButton
                label="remove"
                classNames="remove-action"
                handleClick={handleRemoveClick}
                data={{ index }}
                type="button"
              />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
