/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('single_country_declaration', {
		Company_code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Invoice_Number: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date: {
			type: DataTypes.STRING,
			allowNull: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true
		},
		marks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date_of_exportation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		other_style_details: {
			type: DataTypes.STRING,
			allowNull: true
		},
		detail: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'single_country_declaration'
	});
};
