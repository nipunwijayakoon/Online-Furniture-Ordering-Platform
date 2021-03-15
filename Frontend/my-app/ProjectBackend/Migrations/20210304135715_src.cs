using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class src : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Items");

            migrationBuilder.AddColumn<string>(
                name: "Src",
                table: "Items",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Src",
                table: "Items");

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Items",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
