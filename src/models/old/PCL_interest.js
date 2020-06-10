/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PCL_interest', {
		PCL_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Counter: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		rate: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		transaction_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		interest_days: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		because_of: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'PCL_interest'
	});
};
