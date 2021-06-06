using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectBackend.Migrations
{
    public partial class updatewithdeleteddesignsmodelwithvarchar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Deleted_Reason",
                table: "DeletedNewDesigns",
                type: "nvarchar(250)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Deleted_Reason",
                table: "DeletedNewDesigns",
                type: "nvarchar(50)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldNullable: true);
        }
    }
}
