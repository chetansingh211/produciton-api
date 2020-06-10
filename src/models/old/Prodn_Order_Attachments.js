/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Prodn_Order_Attachments', {
		Prodn_Order_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Attachment_Code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		No_of_pieces: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Returnable: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Isuued_to: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Issued_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Issue_Challan: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Returned_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Returned_On: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Return_Challan: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Prodn_Order_Attachments'
	});
};
