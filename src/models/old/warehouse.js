/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('warehouse', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		warehouse_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Address2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Zip: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Phone3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Fax2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		E_Mail: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Telex: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TeleGrams: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'warehouse'
	});
};
