/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AL_Master', {
		Adv_License_No: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		DEEC_Number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Issued_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Expiry_Date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'AL_Master'
	});
};
