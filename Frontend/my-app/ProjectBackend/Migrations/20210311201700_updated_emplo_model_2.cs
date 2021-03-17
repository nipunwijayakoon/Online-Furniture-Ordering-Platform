using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class updated_emplo_model_2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmploName",
                table: "Emplos");

            migrationBuilder.RenameColumn(
                name: "Occupation01",
                table: "Emplos",
                newName: "NewDesignCode");

            migrationBuilder.RenameColumn(
                name: "ImageName01",
                table: "Emplos",
                newName: "ImageName_");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NewDesignCode",
                table: "Emplos",
                newName: "Occupation01");

            migrationBuilder.RenameColumn(
                name: "ImageName_",
                table: "Emplos",
                newName: "ImageName01");

            migrationBuilder.AddColumn<string>(
                name: "EmploName",
                table: "Emplos",
                type: "nvarchar(50)",
                nullable: true);
        }
    }
}
