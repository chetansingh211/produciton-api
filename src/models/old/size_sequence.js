/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('size_sequence', {
		Garment_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sequence_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		size_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		sequence_desc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size_order: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		size1: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size3: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size4: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size5: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size6: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size7: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size8: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size9: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size10: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size11: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size12: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size13: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size14: {
			type: DataTypes.STRING,
			allowNull: true
		},
		size15: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'size_sequence'
	});
};
