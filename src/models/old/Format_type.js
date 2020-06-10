/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Format_type', {
		format_type_id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		format_name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Sequence_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Buyer_Id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
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
		},
		qty1: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty2: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty3: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty4: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty5: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty6: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty7: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty8: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty9: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty10: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty11: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty12: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty13: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty14: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		qty15: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Format_type'
	});
};
