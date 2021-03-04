using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class newColoum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Distance",
                table: "NewDesign_1",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PersonAddress",
                table: "NewDesign_1",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PersonEmail",
                table: "NewDesign_1",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PersonName",
                table: "NewDesign_1",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Items",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Items",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Distance",
                table: "NewDesign_1");

            migrationBuilder.DropColumn(
                name: "PersonAddress",
                table: "NewDesign_1");

            migrationBuilder.DropColumn(
                name: "PersonEmail",
                table: "NewDesign_1");

            migrationBuilder.DropColumn(
                name: "PersonName",
                table: "NewDesign_1");

            migrationBuilder.DropColumn(
                name: "Count",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Items");
        }
    }
}
