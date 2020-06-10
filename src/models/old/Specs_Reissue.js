/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Specs_Reissue', {
		Item_type: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Specification_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Specified_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Received_Value: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Verified: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		Verified_By: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Verification_Dt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Descripency: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		Accepted_Quantity: {
			type: DataTypes.DECIMAL,
			allowNull: true
		}
	}, {
		tableName: 'Specs_Reissue'
	});
};
