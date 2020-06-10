/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('buyer_measurements', {
		buyer_measurement_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		size_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		garment_id: {
			type: DataTypes.INTEGER,
			allowNull:false
		},
		buyer_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		sequence_id: {
			type: DataTypes.INTEGER,
			allowNull: false
			
		},
		measurement: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		measurement_unit: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},{
		freezeTableName: true,
		timestamps: false
	},
	 {
		tableName: 'buyer_measurements'
	});
};
