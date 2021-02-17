using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class newdesignm2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeDuration",
                table: "NewDesign_1");

            migrationBuilder.AddColumn<string>(
                name: "Distance",
                table: "NewDesign_1",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DurationDate",
                table: "NewDesign_1",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Distance",
                table: "NewDesign_1");

            migrationBuilder.DropColumn(
                name: "DurationDate",
                table: "NewDesign_1");

            migrationBuilder.AddColumn<string>(
                name: "TimeDuration",
                table: "NewDesign_1",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
